import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params, hash) {
    var text = params[0],
        limit = hash.limit || 100;

    if (text.length > limit){
      text = text.substr(0, limit - 3) + "...";
    }
    return text;
  }
});
