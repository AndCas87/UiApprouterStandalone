using my.bookshop as my from '../db/data-model';
type Name : String(20);

service CatalogService @(requires: 'authenticated-user') {

    entity Books @(restrict: [{
        grant: ['READ','WRITE'],
        to   : ['CORSO_RW_SC']
    }]) as projection on my.Books;

}
