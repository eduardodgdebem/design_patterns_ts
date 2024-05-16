import { Observer } from "./observer"

export class Subject {
    private observers: Observer[] = []
    private state: number

    getState() {
        return this.state
    }

    setState(state: number) {
        this.state = state
        this.notifyAllObservers()
    }

    attach(observer: Observer) {
        this.observers.push(observer)
    }

    notifyAllObservers() {
        this.observers.forEach(observer => observer.update())
    }
}