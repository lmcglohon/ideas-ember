import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class QuoteListComponent extends Component {
  sortProperties = Object.freeze(['id:desc']);

  @sort('args.quotes', 'sortProperties')
  sortedQuotes;
}