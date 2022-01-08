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
            updatePackageCommands()
        ])(tree, _context);
    };
}

function updatePackageCommands(): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const packagePath: string = './package.json';
        const buffer = tree.read(packagePath);

        if (!buffer) {
            throw new SchematicsException('Could not find package.json file');
        }

        const pkg: any = JSON.parse(buffer.toString());

        pkg.scripts['prettier'] = 'pretty-quick --staged';
        pkg.scripts['pre-commit'] = 'npm run prettier';
        pkg.scripts['pre-push'] = '';
        pkg.scripts['prepare'] = 'husky install';

        tree.overwrite(packagePath, JSON.stringify(pkg, null, 2));
    };
}
