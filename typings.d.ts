interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    primaryColor: string;
    secondaryColor: string;
    images: Image[];
    short_description: string;
    long_description: string;
}

export interface About extends SanityBody {
    _type: 'about'; // this is the type of the document
    origin: string; 
    about_me: string; 
    awards: string[];
}