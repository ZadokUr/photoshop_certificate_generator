
# Photoshop Batch Certificate Generator Script

---

A simple photoshop script written to create a large of certificates from a single source file efficiently.

The script loads `name` and `capacity` from the `honourees.json` file and displays a different *role message* personal pronouns depending on the gender of the individual.

### `honourees.json`

```json
[
    {
		"name": "Arya Evans",
		"gender": "her",
		"capacity": "Nun of the Voice"
	},
    ...
]
```

### Certificate.psd
A custom certificate file can be used instead of the one used. But heed must be given to the layer names in the desired certificate .psd file.

![Certificate Example](/screenshots/certificate.png)

### Loading the Script
To load the script, navigate to `File` > `Scripts` > `Browse` and select `certificate-generator.jsx`.

![Loading Script](/screenshots/load_script.png)

The certificates are set to export to .pdf but that can be changed to whatever desired file format.

For more information, the [Adobe Photoshop Scripting Documentation](https://www.adobe.com/devnet/photoshop/scripting.html) can be referred to.
