import {
    chain,
    Rule,
    SchematicContext,
    SchematicsException,
    Tree
} from '@angular-devkit/schematics';
import { addPackageJsonDependencies } from './add-packages';
import { addTemplateFiles } from './add-template-files';
import { installDependencies } from './install-dependencies';
import { Options } from './interfaces';

export default function (options: Options): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        return chain([
            addPackageJsonDependencies(),
            installDependencies(),
            addTemplateFiles(options),
            updatePackageCommands(options)
        ])(tree, _context);
    };
}

function updatePackageCommands(options: Options): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const packagePath: string = './package.json';
        const buffer = tree.read(packagePath);

        if (!buffer) {
            throw new SchematicsException('Could not find package.json file');
        }

        const pkg: any = JSON.parse(buffer.toString());

        pkg.scripts['format'] = 'pretty-quick --staged';
        pkg.scripts['pre-commit'] = 'npm run format';
        pkg.scripts['prepare'] = 'husky install';

        if (options.includeAngularCommands) {
            pkg.scripts['test-ci'] =
                'ng test -- --no-watch --no-progress --browsers=ChromeHeadless';
        }

        tree.overwrite(packagePath, JSON.stringify(pkg, null, 2));
    };
}
