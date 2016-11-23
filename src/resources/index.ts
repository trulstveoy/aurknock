import {FrameworkConfiguration} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-binding';
import {KnockoutObservationAdapter} from './adapters/observation-adapter';

export function configure(config: FrameworkConfiguration) {
  //config.globalResources([]);

  config.container.get(ObserverLocator).addAdapter(new KnockoutObservationAdapter());
}
