import { models } from 'models';
import { AbstactModel } from './AbstactModel';


export class BookModel implements AbstactModel<models.book.Attributes, models.book.RawAttributes> {

    private id?: number;
    private title?: string;
    private description?: string;
    private price?: number;
    private publishedAt?: Date;
    private authorId?: number;
    private updatedAt?: Date;
    private createdAt?: Date;

    constructor(attributes?: models.book.Attributes | models.book.RawAttributes, isRaw: boolean = true) {
        if (attributes) {
            if (isRaw) {
                this.mapDatabaseObject(attributes);
            } else {
                this.mapJson(attributes);
            }
        }
    }

    public get Id(): number {
        return this.id;
    };

    public get Title(): string {
        return this.title;
    };

    public get Description(): string {
        return this.description;
    };

    public get Price(): number {
        return this.price;
    };

    public get PublishedAt(): Date {
        return this.publishedAt;
    };

    public get AuthorId(): number {
        return this.authorId;
    };

    public get UpdatedAt(): Date {
        return this.updatedAt;
    };

    public get CreatedAt(): Date {
        return this.createdAt;
    };

    public setId(id: number): BookModel {
        this.id = id;
        return this;
    };

    public setTitle(title: string): BookModel {
        this.title = title;
        return this;
    };

    public setDescription(description: string): BookModel {
        this.description = description;
        return this;
    };

    public setPrice(price: number): BookModel {
        this.price = price;
        return this;
    };

    public setAuthorId(authorId: number): BookModel {
        this.authorId = authorId;
        return this;
    };

    public setPublishedAt(publishedAt: Date): BookModel {
        this.publishedAt = publishedAt;
        return this;
    };

    public setUpdatedAt(updatedAt: Date): BookModel {
        this.updatedAt = updatedAt;
        return this;
    };

    public setCreatedAt(createdAt: Date): BookModel {
        this.createdAt = createdAt;
        return this;
    };

    public mapJson(attributes: models.book.Attributes): BookModel {
        if (attributes !== undefined) {
            this.setId(attributes.id);
            this.setTitle(attributes.title);
            this.setDescription(attributes.description);
            this.setPrice(attributes.price);
            this.setAuthorId(attributes.authorId);
            this.setPublishedAt(attributes.publishedAt);
            this.setCreatedAt(attributes.createdAt);
            this.setUpdatedAt(attributes.updatedAt);
        }
        return this;
    }

    public mapDatabaseObject(attributes: models.book.RawAttributes): BookModel {
        if (attributes !== undefined) {
            this.setId(attributes.id);
            this.setTitle(attributes.title);
            this.setDescription(attributes.description);
            this.setPrice(attributes.price);
            this.setAuthorId(attributes.author_id);
            this.setPublishedAt(attributes.published_at);
            this.setCreatedAt(attributes.created_at);
            this.setUpdatedAt(attributes.updated_at);
        }
        return this;
    }

    public validate(): void {
        // TODO Check id all required attributes ar given
    }

    public toJson(): Book {
        return new Book(this);
    }

    public toDatabaseObject(): RawBook {
        return new RawBook(this);
    }

}

export class Book implements models.book.Attributes {
    public id?: number;
    public title: string;
    public authorId: number;
    public description?: string;
    public price?: number;
    public publishedAt?: Date;
    public updatedAt?: Date;
    public createdAt?: Date;

    constructor(builder: BookModel) {
        this.id = builder.Id;
        this.title = builder.Title;
        this.description = builder.Description;
        this.price = builder.Price;
        this.publishedAt = builder.PublishedAt;
        this.authorId = builder.AuthorId;
        this.updatedAt = builder.UpdatedAt;
        this.createdAt = builder.CreatedAt;
    }
}

export class RawBook implements models.book.RawAttributes {
    public id?: number;
    public title: string;
    public author_id: number;
    public description?: string;
    public price?: number;
    public published_at?: Date;
    public updated_at?: Date;
    public created_at?: Date;

    constructor(builder: BookModel) {
        this.id = builder.Id;
        this.title = builder.Title;
        this.description = builder.Description;
        this.price = builder.Price;
        this.published_at = builder.PublishedAt;
        this.author_id = builder.AuthorId;
        this.updated_at = builder.UpdatedAt;
        this.created_at = builder.CreatedAt;
    }
}
