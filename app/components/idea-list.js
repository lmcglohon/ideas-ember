import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class IdeaListComponent extends Component {
  sortProperties = Object.freeze(['id:desc']);

  @sort('args.ideas', 'sortProperties')
  sortedIdeas;
}