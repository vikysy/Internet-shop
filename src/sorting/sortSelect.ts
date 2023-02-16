import catalogs from "../components/shop/API/CatalogAPI";
import { CatalogProps } from "../components/shop/catalog/CatalogImg";

export function sortFull(
    newCategoryCatalogs: any,
    allCategory: any,
    setAllCatalogs: any,
    typeSkin: any,
    price: any,
    allCatalogs: any) {
    newCategoryCatalogs = catalogs;
    if (allCategory === 'allCategory') {
        newCategoryCatalogs = catalogs;
        filterAll(newCategoryCatalogs, setAllCatalogs)
    } else if (allCategory === 'bmc') {
        filterBmc(newCategoryCatalogs, setAllCatalogs)
    } else if (allCategory === 'peel') {
        filterPeel(newCategoryCatalogs, setAllCatalogs)
    } else if (allCategory === 'postPeel') {
        filterPostPeel(newCategoryCatalogs, setAllCatalogs)
    }

    if (typeSkin === 'oily') {
        filterOily(newCategoryCatalogs, setAllCatalogs)
    } else if (typeSkin === 'sensitive') {
        filterSensitive(newCategoryCatalogs, setAllCatalogs)
    } else if (typeSkin === 'normal') {
        filterNormal(newCategoryCatalogs, setAllCatalogs)
    }

    if (price === 'rise') {
        filterRise(allCatalogs, setAllCatalogs)
    } else if (price === 'wane') {
        filterWane(allCatalogs, setAllCatalogs)
    }
}

function filterAll(newCategoryCatalogs: CatalogProps[], setAllCatalogs: any) {
    setAllCatalogs(newCategoryCatalogs);
}

function filterBmc(newCategoryCatalogs: CatalogProps[], setAllCatalogs: any) {
    newCategoryCatalogs = catalogs.filter(catalog => {
        if (typeof catalog.value === 'object') {

            for (let i = 0; i < catalog.value.length; i++) {
                if (catalog.value[i] === 'bmc') {
                    return catalog;
                }
            }
        }
    });
    setAllCatalogs(newCategoryCatalogs);
}

function filterPeel(newCategoryCatalogs: CatalogProps[], setAllCatalogs: any) {
    newCategoryCatalogs = catalogs.filter(catalog => {
        if (catalog.value === 'peel') {
            return catalog;
        }
    });
    setAllCatalogs(newCategoryCatalogs);
}

function filterPostPeel(newCategoryCatalogs: CatalogProps[], setAllCatalogs: any) {
    newCategoryCatalogs = catalogs.filter(catalog => {
        if (catalog.value === 'postPeel') {
            return catalog;
        }
    })
    setAllCatalogs(newCategoryCatalogs);
}

function filterOily(newCategoryCatalogs: CatalogProps[], setAllCatalogs: any) {
    setAllCatalogs(newCategoryCatalogs.filter(catalog => {
        if (typeof catalog.value === 'object') {

            for (let i = 0; i < catalog.value.length; i++) {
                if (catalog.value[i] === 'oily') {
                    return catalog;
                }
            }
        }
    }));
}

function filterSensitive(newCategoryCatalogs: CatalogProps[], setAllCatalogs: any) {
    setAllCatalogs(newCategoryCatalogs.filter(catalog => {
        if (typeof catalog.value === 'object') {

            for (let i = 0; i < catalog.value.length; i++) {
                if (catalog.value[i] === 'sensitive') {
                    return catalog;
                }
            }
        }
    }));
}

function filterNormal(newCategoryCatalogs: CatalogProps[], setAllCatalogs: any) {
    setAllCatalogs(newCategoryCatalogs.filter(catalog => {
        if (typeof catalog.value === 'object') {

            for (let i = 0; i < catalog.value.length; i++) {
                if (catalog.value[i] === 'normal') {
                    return catalog;
                }
            }
        }
    }));
}


function filterRise(allCatalogs: CatalogProps[], setAllCatalogs: any) {
    setAllCatalogs(allCatalogs.sort((a, b) => {
        return b.price - a.price;
    }))
}

function filterWane(allCatalogs: CatalogProps[], setAllCatalogs: any) {
    setAllCatalogs(allCatalogs.sort((a, b) => {
        return a.price - b.price;
    }))
}