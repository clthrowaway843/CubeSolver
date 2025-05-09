import { connectGanCube, GanCubeConnection, GanCubeEvent, MacAddressProvider } from 'gan-web-bluetooth';

export class CubeConnection {
    conn: GanCubeConnection | null = null;
    eventHandler: ((event: GanCubeEvent) => void) | null = null;

    constructor(private macProvider: MacAddressProvider) { }

    async connect(eventHandler: (event: GanCubeEvent) => void) {
        this.conn = await connectGanCube(this.macProvider);
        this.eventHandler = eventHandler;
        this.conn.events$.subscribe(eventHandler);
        // ...send initial requests as needed
    }

    disconnect() {
        this.conn?.disconnect();
        this.conn = null;
    }

    async sendCommand(cmd: any) {
        await this.conn?.sendCubeCommand(cmd);
    }
}