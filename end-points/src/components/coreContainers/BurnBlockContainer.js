import JsonContainer from "./JsonContainer";
import CardText from "./CardText";

/*
 curl.exe -X GET "https://api.hiro.so/extended/v2/burn-blocks/0x00000000000000000000
bb985beebfb73a2f36993b9a32e211c4e2fe16e8ca57"


 curl.exe -X GET "https://api.hiro.so/extended/v2/burn-blocks?limit=1
*/

export default class BurnBlockContainer extends JsonContainer {
   
        constructor(data = {}) {
            super(data);
            this.setData({...data, "card_title" : CardText.CARD_TITLE_BURN_BLOCK});
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