using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace AngularApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        /*
        [HttpGet(Name = "GetData")]
        public String Get()
        {
            return "helloz";
        }
        */

        [HttpGet(Name = "GetUser")]
        public UserData GetUser()
        // public string GetUser()
        {
            var qs = HttpContext.Request.QueryString.ToString();
            var encodedString = HttpContext.Request.Query["data"];
            System.Console.WriteLine("qs " + qs + encodedString);
            string result = "";
            if (qs != null && qs.Length > 10)
            {

                byte[] data = Convert.FromBase64String(encodedString);
                string decodedString = System.Text.Encoding.UTF8.GetString(data);
                System.Console.WriteLine("ds " + decodedString);
                JObject json = JObject.Parse(decodedString);
                string fname = json.Value<String>("firstName") ?? string.Empty;
                string lname = json.Value<String>("lastName") ?? string.Empty;
                JObject address = json.Value<JObject>("address") ?? new JObject();
                string street = address.Value<String>("street") ?? string.Empty;
                string city = address.Value<String>("city") ?? string.Empty;
                string state = address.Value<String>("state") ?? string.Empty;
                string zip = address.Value<String>("zip") ?? string.Empty;

                UserData ud1 = new UserData();
                result = fname + "  " + lname + " " + street + " " + city + " " + state + " " + zip;
                ud1.UserName = fname + "  " + lname;
                ud1.UserAddr = street + " " + city + " " + state + " " + zip;
                //return result;
                return ud1;
            }
            // if no form was passed, return dummy value
            UserData ud = new UserData();
            ud.UserName = "breck";
            ud.UserAddr = "6660 Farbell Row";
            return ud;
        }

        /*
         *   I got the post working where it would receive the form data and return userdata or a string, but I was not able to 
         *   properly receive the data and process the data in the Angular app.   Just leaving this in, if I want to play with it some more.
         * 
         */
        [HttpPost]
        public String CreateUser([FromBody] String userData)
        {
            try
            {
                if (userData == null)
                    return "no data";
                JObject json = JObject.Parse(userData);
                System.Console.WriteLine("data in post " + userData);
                // System.Console.WriteLine("data firstname " + json.Value<String>("firstName"));
                String fname = json.Value<String>("firstName") ?? string.Empty;
                String lname = json.Value<String>("lastName") ?? string.Empty;

                String jsonresp = "{\"data\":\"returndata\"}";
                System.Console.WriteLine(fname + lname);
                System.Console.WriteLine(jsonresp);
                return jsonresp;
                //return fname + lname;
                //return userData;
                //return userData.UserName + " " + userData.UserAddr;

            }
            catch (Exception)
            {
                return "Error creating new employee record";
            }
        }
    }
}

