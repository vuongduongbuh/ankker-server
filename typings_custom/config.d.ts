declare module config {

    interface Environments {
        development: Configuration;
        test: Configuration;
        production: Configuration;
    }

    interface Configuration {
        database: ConfigurationDatabase;
        server: ConfigurationServer;
        logger: ConfigurationLogger;
    }

    interface ConfigurationDatabase {
        client: string;
        connection?: string;
    }

    interface ConfigurationServer {
        host: string;
        port: string;
        graphiql: boolean;
    }

    interface ConfigurationLogger {
        host?: string;
        port?: string;
        file?: ConfigurationLoggerConsole;
        console: ConfigurationLoggerConsole;
        debug: string;
    }

    interface ConfigurationLoggerConsole {
        level: string;
    }
}
