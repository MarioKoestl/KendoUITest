import { IContact } from "../model/IContact";
import * as data from "../dataStore/data";

export default class Service {
    public getUserData():IContact[] {
        return data.userData;
    }
}