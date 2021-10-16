import { strings } from '@angular-devkit/core';
import {
    apply,
    applyTemplates,
    branchAndMerge,
    MergeStrategy,
    mergeWith,
    move,
    Rule,
    Tree,
    url
} from '@angular-devkit/schematics';
import { Options } from './interfaces';

export function addTemplateFiles(options: Options): Rule {
    return (tree: Tree) => {
        const sourceTemplates = apply(url('./files'), [
            applyTemplates({
                ...strings,
                ...options
            }),
            move(tree.root.path)
        ]);
        return branchAndMerge(mergeWith(sourceTemplates, MergeStrategy.Overwrite));
    };
}
