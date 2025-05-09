import { Subscription, interval } from 'rxjs';

export type TimerState = "IDLE" | "READY" | "RUNNING" | "STOPPED";

export class Timer {
    private localTimer: Subscription | null = null;
    private startTime: number = 0;
    public state: TimerState = "IDLE";

    constructor(private onTick: (elapsed: number) => void) { }

    start() {
        this.startTime = Date.now();
        this.state = "RUNNING";
        this.localTimer = interval(30).subscribe(() => {
            this.onTick(Date.now() - this.startTime);
        });
    }

    stop() {
        this.localTimer?.unsubscribe();
        this.localTimer = null;
        this.state = "STOPPED";
    }

    reset() {
        this.stop();
        this.state = "IDLE";
    }
}