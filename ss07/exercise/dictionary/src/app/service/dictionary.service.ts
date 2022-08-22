import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionary: Dictionary[] = [
    {word: 'hello', translate: 'xin chào'},
    {word: 'computer', translate: 'máy tính'},
    {word: 'mouse', translate: 'chuột'},
    {word: 'keyboard', translate: 'bàn phím'},
    {word: 'monitor', translate: 'màn hình'},
    {word: 'speaker', translate: 'loa'},
    {word: 'printer', translate: 'máy in'},
    {word: 'headphone', translate: 'tai nghe'},
  ];

  constructor() {
  }

  getAll(): Dictionary[] {
    return this.dictionary;
  }

  getDictionaryByWord(findingWord: string): Dictionary {
    return this.dictionary.find(temp => temp.word === findingWord)
  }
}
