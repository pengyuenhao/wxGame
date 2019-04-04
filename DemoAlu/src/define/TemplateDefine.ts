export class Template {
    public static readonly World = {
        "@type": "EntityData",
        "behaviors": [{
            "@type": "World"
        }]
    };
    public static readonly Player = {
        "@type": "EntityData",
        "behaviors": [{
            "@type": "Player"
        }]
    };
    public static readonly Enemy = {
        "@type": "EntityData",
        "behaviors": [{
            "@type": "Enemy"
        }]
    };
}
