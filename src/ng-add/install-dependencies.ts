import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function installDependencies(): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        _context.addTask(new NodePackageInstallTask());
        _context.logger.info('✅️ Dependencies installed');
        return tree;
    };
}
