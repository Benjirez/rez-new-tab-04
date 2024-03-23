const mongoose = require('mongoose')

const MyDataSchema = mongoose.Schema({
      col_a: String,
      col_b: String,
      col_c: String,
      col_d: String,
      col_e: String,
      col_f: String,
      col_g: String,
      col_h: String,
      
    })

    const model_x1s = mongoose.model( 'model_x1s', MyDataSchema )
    const new_tab_01 = mongoose.model( 'new_tab_01', MyDataSchema )
    const new_tab_03 = mongoose.model( 'new_tab_03', MyDataSchema )
    const new_tab_04 = mongoose.model( 'new_tab_04', MyDataSchema )
    const rez_new_tab_2022_01_db = mongoose.model( 'rez-new-tab-2022-01-db', MyDataSchema, 'rez-new-tab-2022-01-db' ) // add third argumant to force collection name (not ending in 's' problems)
    const new_tab_01_backup = mongoose.model( 'new_tab_01_backup', MyDataSchema, 'new_tab_01_backup' )
    
    const oldModels = [
      model_x1s, 
      new_tab_01, 
      new_tab_03, 
      new_tab_04,  
      rez_new_tab_2022_01_db, 
      new_tab_01_backup ]
    
    module.exports = oldModels