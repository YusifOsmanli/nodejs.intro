class Blog {
    constructor(id,title,description,createdAt,modifiedAt,name,surname) {
        this.id = id
        this.title = title
        this.description = description
        this.createdAt = createdAt
        this.modifiedAt = modifiedAt
        this.author = {name: name, surname: surname}
    }
}
module.exports = Blog