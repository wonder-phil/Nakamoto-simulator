import JsonContainer from "./JsonContainer";


export default class PoxCycle extends JsonContainer {
    constructor(data = {}) {
        super(data);
        this.setData(data);
    }

    static poxCycleFields = [
      "block_height",
      "index_block_hash",
      "cycle_number",
      "total_weight",
      "total_stacked_amount",
      "total_signers"
    ];

}