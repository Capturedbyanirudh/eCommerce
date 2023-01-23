import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProducts: [], searchKey:string ,  propName:string): any[] {
    const result:any = []
   if(!allProducts || searchKey=='' || propName=='' ){
    return allProducts;
  }
  allProducts.forEach((prodcts:any)=>{
    if(prodcts[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
      result.push(prodcts)
    }
  })
  return result;
}

}
