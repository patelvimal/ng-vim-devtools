import { Rule, SchematicContext } from '@angular-devkit/schematics';
import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import {
    addPackageJsonDependency,
    NodeDependency,
    NodeDependencyType
} from '@schematics/angular/utility/dependencies';

export function addPackageJsonDependencies(): Rule {
    return (tree: Tree, _context: SchematicContext): Tree => {
        let dependencies: NodeDependency[] = [
            {
                type: NodeDependencyType.Dev,
                name: 'husky',
                version: `^6.0.0`,
                overwrite: true
            },
            {
                type: NodeDependencyType.Dev,
                name: 'prettier',
                version: `^2.3.1`,
                overwrite: true
            },
            {
                type: NodeDependencyType.Dev,
                name: 'pretty-quick',
                version: `^3.1.1`,
                overwrite: true
            },
            {
                type: NodeDependencyType.Dev,
                name: '@commitlint/cli',
                version: `^12.1.4`,
                overwrite: true
            },
            {
                type: NodeDependencyType.Dev,
                name: '@commitlint/config-conventional',
                version: `^12.1.4`,
                overwrite: true
            }
        ];

        dependencies.forEach((dependency) => {
            addPackageJsonDependency(tree, dependency);
            _context.logger.log(
                'info',
                `✅️ Added "${dependency.name}" into ${dependency.type}`
            );
        });

        return tree;
    };
}
