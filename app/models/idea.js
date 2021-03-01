import Model, { attr } from '@ember-data/model';

export default class IdeaModel extends Model {
  @attr summary;
  @attr quote;
}
