import { BinaryObserver } from "./binaryObserver";
import { HexaObserver } from "./hexaObserver";
import { OctalObserver } from "./octalObserver";
import { Subject } from "./subject";

const subject = new Subject()

new BinaryObserver(subject)
new OctalObserver(subject)
new HexaObserver(subject)

subject.setState(15)
subject.setState(10)