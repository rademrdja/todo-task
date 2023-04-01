export class Task {
    constructor(id, name, isCompleted, isParent, parentsId, children) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
        this.isParent = isParent;
        this.parentsId = parentsId;
        this.children = children;
    }
}