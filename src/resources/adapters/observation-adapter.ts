export class KnockoutObservationAdapter {
  constructor(){
    console.log('KnockoutObservationAdapter created')
  }
  getObserver(object, propertyName, descriptor) {

    console.log('observing...');
    // let type = object.entityType;
    // if (!type || !(type.__canObserve__ || createCanObserveLookup(type))[propertyName]) {
    //   return null;
    // }

    // let observerLookup = object.__breezeObserver__ || createObserverLookup(object);
    // return observerLookup.getObserver(propertyName);
  }
}