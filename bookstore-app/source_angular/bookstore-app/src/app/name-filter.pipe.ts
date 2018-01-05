import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((book) =>
            book.title.toLocaleLowerCase().startsWith(filter) != false) : value;
  }

}
