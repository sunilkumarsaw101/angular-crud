import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTableFilter'
})
export class CustomTableFilterPipe implements PipeTransform {

  transform(tableData: any[], searchQuery:any) {
     if(!searchQuery.trim()){
      return tableData;
     }

    if(searchQuery){
      let result= tableData.filter(item=>item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      console.log(result);
      return result
    }
    
  
  }

}
