using mercadopago;

public class MyClass {
	public static void Main () {
		MP mp = new MP("CLIENT_ID", "CLIENT_SECRET");

		mp.put("/preapproval/:ID", "{\"status\": \"authorized\"}");
	}
}