import JsonContainer from "./JsonContainer";

export default class BitcoinJsonContainer extends JsonContainer {
    constructor(data = {}) {
        super(data);
        this.setData(data);
    }

    static bitcoinFields = [
        "canonical",
        "height",
        "hash",
        "block_time",
        "block_time_iso",
        "tenure_height",
        "index_block_hash",
        "parent_block_hash",
        "burn_block_time",
        "burn_block_time_iso",
        "burn_block_hash",
        "burn_block_height",
        "miner_tx_id",
        "execution_cost_read_count",
        "execution_cost_read_length",
        "execution_cost_runtime",
        "execution_cost_write_count",
        "execution_cost_write_length",
        "txs"
    ];


}