type CentreName = {
    Name: string
}

type CentreParam = {
    Name: string,
    Value: string
}

type CentreParams = Array<CentreParam>

// declare interface CentreDataSet {
//     Name: CentreName,
//     Params: CentreParams
// }
declare interface CentreNameDataSet {
    Name: CentreName
}
declare interface CentreParamsDataSet {
    Params: CentreParams
}