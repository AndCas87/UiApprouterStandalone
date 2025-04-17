package customer.bookshop.handlers;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sap.cds.ql.Select;
import com.sap.cds.ql.cqn.CqnSelect;
import com.sap.cds.services.cds.CdsReadEventContext;
import com.sap.cds.services.cds.CqnService;
import com.sap.cds.services.handler.EventHandler;
import com.sap.cds.services.handler.annotations.After;
import com.sap.cds.services.handler.annotations.On;
import com.sap.cds.services.handler.annotations.ServiceName;
import com.sap.cds.services.persistence.PersistenceService;

import cds.gen.catalogservice.CatalogService_;
import cds.gen.catalogservice.Books_;

@Component
@ServiceName(CatalogService_.CDS_NAME)
public class CatalogServiceHandler implements EventHandler {

	@Autowired
PersistenceService db;
	@On(event = CqnService.EVENT_READ, entity = Books_.CDS_NAME)
	public void books(CdsReadEventContext context) {
		CqnSelect q = Select.from("my.bookshop.Books");
		context.setResult(db.run(q));
	}

	// @After(event = CqnService.EVENT_READ)
	// public void discountBooks(Stream<Books> books) {
	// books.filter(b -> b.getTitle() != null && b.getStock() != null)
	// .filter(b -> b.getStock() > 200)
	// .forEach(b -> b.setTitle(b.getTitle() + " (discounted)"));
	// }

}