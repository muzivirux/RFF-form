=IF(C2<>"", LEFT(C2, FIND(",", C2) - 1), "")

<!DOCTYPE html>
<html>

<head>
    <title>Sales Market Survey</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <!-- <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0/css/select2.min.css"> -->
</head>

<body>
    <h1>Sales Market Survey</h1>
    <form id="submit-to-google-sheet">
        <label for="name">Customer name:</label>
        <input type="text" id="name" name="Customer Name" required>

        <label for="streetAddress">Street address:</label>
        <input type="text" id="streetAddress" name="streetAddress" required>

        <label for="state">State:</label>
        <select id="state" name="State" onchange="populateCities()">
            <option value="">Choose State</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
            <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
            <option value="Balochistan">Balochistan</option>
            <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
            <option value="Gilgit-Baltistan (formerly known as the Northern Areas)">Gilgit-Baltistan (formerly known as
                the Northern Areas)</option>
            <option value="Azad Jammu and Kashmir">Azad Jammu and Kashmir</option>
        </select>

        <label for="city">City:</label>
        <select id="city" name="City">
            <option value="">Select a City</option>
        </select>

        <!-- Rest of the form fields -->

        <input type="submit" value="Submit">
    </form>

    <script>
        // City data based on selected state
        const cityData = {
            Punjab: ["Burewala", "Vehari", "Lahore"],
            Sindh: ["Karachi"],
            "Khyber Pakhtunkhwa": ["Peshawar", "Abbottabad"],
            Balochistan: ["Quetta"],
            "Islamabad Capital Territory": ["Islamabad"],
            "Gilgit-Baltistan (formerly known as the Northern Areas)": ["Gilgit", "Skardu"],
            "Azad Jammu and Kashmir": ["Muzaffarabad"]
        };

        function populateCities() {
            const stateSelect = document.getElementById("state");
            const citySelect = document.getElementById("city");
            const selectedState = stateSelect.value;

            // Clear existing options
            citySelect.innerHTML = '<option value="">Select a City</option>';

            // Populate with cities based on selected state
            if (selectedState && cityData[selectedState]) {
                const cities = cityData[selectedState];
                for (const city of cities) {
                    const option = document.createElement("option");
                    option.value = city;
                    option.text = city;
                    citySelect.appendChild(option);
                }
            }
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbw2stZCG20-egcwu1Ltyzs1kfshvbNgbJc8bFNJhdvGZ9r9hCxSlGFblzKWM52UBhcW/exec';
        const form = document.getElementById("submit-to-google-sheet");

        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => alert('Success!', response))
                .catch(error => alert('Error!', error.message));
        });
    </script>

</body>

</html>

> how to disallow negative value

> cities list
>
> > Punjab

"Ahmedpur East",
"Arifwala",
"Attock",
"Bahawalnagar",
"Bahawalpur",
"Burewala",
"Chakwal",
"Chiniot",
"Chishtian",
"Daska",
"Dera Ghazi Khan",
"Faisalabad",
"Gojra",
"Gujranwala",
"Gujrat",
"Hafizabad",
"Jhang",
"Jhelum",
"Kamalia",
"Kasur",
"Khanewal",
"Khanpur",
"Khushab",
"Lahore",
"Layyah",
"Lodhran",
"Mandi Bahauddin",
"Mian Channu",
"Mianwali",
"Multan",
"Muridke",
"Murree",
"Muzaffargarh",
"Nankana Sahib",
"Narowal",
"Okara",
"Pakpattan",
"Pattoki",
"Rahim Yar Khan",
"Raiwind",
"Rajanpur",
"Rawalpindi",
"Sahiwal",
"Sargodha",
"Shekhupura",
"Sialkot",
"Talagang",
"Taxila",
"Toba Tek Singh",
"Vehari",
"Wah Cantonment",

> > Sindh

"Karachi",
"Hyderabad",
"Sukkur",
"Larkana",
"Nawabshah",
"Mirpur Khas",
"Jacobabad",
"Shikarpur",
"Dadu",
"Tando Allahyar",
"Tando Muhammad Khan",
"Khairpur",
"Ghotki",
"Badin",
"Thatta",
"Sanghar",
"Umerkot",
"Kashmore",
"Mithi",
"Shahdadkot",
"Kandhkot",
"Ratodero",
"Hala",
"Moro",
"Matiari",
"Jamshoro",
"Mirpur Bathoro",
"Sehwan",
"Sujawal",
"Daulatpur",
"Thari Mirwah",
"Chuhar Jamali",
"Bulri Shah Karim",
"Sann",
"Kandiaro",
"Rohri",
"Sita Road",
"Dokri",
"Darya Khan Marri",
"Sinjhoro"

> > Khyber Pakhtunkhwa

"Peshawar",
"Abbottabad",
"Mardan",
"Swabi",
"Swat",
"Nowshera",
"Mansehra",
"Charsadda",
"Kohat",
"Dera Ismail Khan",
"Bannu",
"Haripur",
"Malakand",
"Mingora",
"Batkhela",
"Karak",
"Hangu",
"Upper Dir",
"Lower Dir",
"Tank",
"Shangla",
"Chitral",
"Lakki Marwat",
"Timergara",
"Parachinar",
"Daggar",
"Kohistan",
"Shabqadar",
"Risalpur",
"Jamrud",
"Landi Kotal",
"Darra Adam Khel",
"Takht-i-Bahi",
"Bara",
"Gadoon Amazai",
"Buner",
"Baffa",
"Alpuri"

> > Balochistan

"Quetta",
"Gwadar",
"Turbat",
"Chaman",
"Sibi",
"Zhob",
"Pishin",
"Khuzdar",
"Hub",
"Dera Murad Jamali",
"Usta Muhammad",
"Nushki",
"Mastung",
"Kalat",
"Kharan",
"Panjgur",
"Washuk",
"Pasni",
"Awaran",
"Kech",
"Lasbela",
"Qila Saifullah",
"Ziarat",
"Loralai",
"Duki",
"Chagai",
"Qila Abdullah",
"Dalbandin",
"Harnai",
"Dera Bugti",
"Kohlu",
"Barkhan",
"Naseerabad",
"Jaffarabad",
"Sohbatpur"

> > Gilgit-Baltistan

"Gilgit",
"Skardu",
"Hunza",
"Ghizer",
"Gahkuch",
"Nagar",
"Chilas",
"Astore",
"Shigar",
"Khaplu",
"Danyor",
"Aliabad",
"Karimabad",
"Gakuch",
"Phander",
"Yasin Valley",
"Sust",
"Askole",
"Ganish",
"Thaleem",
"Hussainabad",
"Gupis",
"Hundur",
"Kargah",
"Rondu",
"Tolti",
"Haramosh",
"Ghanche",
"Kharmang",
"Rattu",
"Darel",
"Tangir"

>> Azad Jammu and Kashmir

"Muzaffarabad",
"Mirpur",
"Kotli",
"Bhimber",
"Rawalakot",
"Bagh",
"Pallandri",
"Hajira",
"Sudhanoti",
"Haveli",
"Athmuqam",
"Abbaspur",
"Forward Kahuta",
"Garhi Dupatta",
"Neelum",
"Hattian Bala",
"Charhoi",
"Chikar",
"Dhirkot",
"Sehnsa",
"Khui Ratta",
"Samahni",
"Khuiratta",
"Nakyal",
"Trarkhel",
"Mandol",
"Mirpur Mathelo",
"Mangla",
"Chakswari",
"Naukot",
"Palandri",
"Palangi",
"Ponch",
"Rara",
"Samani",
"Sharda"