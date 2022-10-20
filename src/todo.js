class Todo {
    constructor(title, description, priority, date) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }

    getTitle() {
        return this.title;
    } 

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getDate() {
        return this.date;
    }

}