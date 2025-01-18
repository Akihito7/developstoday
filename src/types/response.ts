export interface GetVehiclesMakesResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: Number;
    VehicleTypeName: string;
  }[];
}

export interface GetVehiclesByMakeId {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleData[];
}

export interface VehicleData {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
