import { Mongo } from 'meteor/mongo';


export default function initCollections(){
  Locations = new Mongo.Collection('locations');
}
