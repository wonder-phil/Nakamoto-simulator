
import JsonContainer from "./JsonContainer";

export default class StacksBlock extends JsonContainer {
    constructor(data = {}) {
        super(data);
        this.setData(data);
    }
    static StacksBlockFields = [

    ];

}