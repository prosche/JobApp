import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryUserDataService implements InMemoryDbService {
  createDb() {
      let users = [
        {id: 11, name: '张蓉',    englishName: 'Mr. Nice',  day1: 11},       
        {id: 12, name: '夏娟娟',  englishName: 'Narco',     day1: 12}, 
        {id: 13, name: 'Abhijit', englishName: 'Bombasto',  day1: 13},       
        {id: 14, name: '张明元',  englishName: 'Celeritas', day1: 14},         
        {id: 15, name: '孙向义',  englishName: 'Magneta',   day1: 15},     
        {id: 16, name: '王君',    englishName: 'RubberMan', day1: 16},         
        {id: 17, name: '张华峰',  englishName: 'Dynama',    day1: 17},   
        {id: 18, name: '赵阳',    englishName: 'Dr IQ',     day1: 18}, 
        {id: 19, name: '张书宁',  englishName: 'Magma',     day1: 19}, 
        {id: 20, name: '谭辰晨',  englishName: 'Tornado',   day1: 20}   
      ]; 
      return {users};
    }
}
