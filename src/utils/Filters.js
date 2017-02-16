
export function projectFilter(projectId) {
    return (todo) => todo.projectId === projectId;
}


export function inboxFilter() {
    return (todo) => todo.projectId === null;
}

export function allFilter() {
    return (todo) => true;
}

