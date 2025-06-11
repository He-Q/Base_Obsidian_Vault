### Setup and Configuration

Follow these steps to get the system up and running in your vault.

### 1. Install Templater Plugin

First, you need the Templater plugin, which is the engine that will run our scripts.

- Go to `Settings` > `Community plugins` in Obsidian.
- Click `Browse` and search for "Templater".
- Click `Install`, and once it's finished, click `Enable`.

#### 2. Download the Scraper Files

Next, get the necessary templates and scripts from the repository.

- Go to the [obsidian-scrapers GitHub page](https://github.com/basilioss/obsidian-scrapers).
- Click the green `Code` button, then `Download ZIP`.
- Unzip the downloaded file on your computer. You will see a folder named `obsidian-scrapers-main` which contains `scripts` and `templates` folders.

### 3. Place Files in Your Vault

Move the `scripts` and `templates` folders from the unzipped download into the main (root) directory of your Obsidian vault.

Your vault's folder structure should look something like this:

```
Base-Obsidian-Vault/  
├── .obsidian/  
├── scripts/                      <-- The scripts folder you just copied from zip 
├── Templater_Folder/     <-- The templates folder you just copied from zip
└── ... and so on  
```

### 4. Configure Templater Settings

Now, you need to tell Templater where to find these new files.

- In Obsidian, go to `Settings` > `Community Plugins` > `Templater`.
- Find the **Template folder location** setting and set it to the `templates` folder you just added.
- Find the **Script files folder location** setting and set it to the `scripts` folder.

Your setup is now complete!



### How to Use It: The YouTube Example

Here’s the step-by-step workflow you described, now fully documented.

### 1. Create Your Content Folders

As you've done, it's a great idea to organize your notes by source. Create folders in your vault for the content you'll be scraping, for example:

- `YouTube`
- `IMDb`
- `Books`

### 2. Scrape a YouTube Video

Let's walk through the process with the YouTube link you provided.

1. **Copy the URL**: Find a video on YouTube and copy its URL. For this example, we'll use: `https://www.youtube.com/watch?v=TmDKbUrSYxQ`
2. **Create a New Note**: Navigate to your `YT` folder in Obsidian and create a new note. You can name it anything for now; the template will likely rename it later.
3. **Trigger Templater**: With the new note open and the cursor active, press `Alt + E`  that is HOTKEY USED (this is the default hotkey to insert a template).
4. **Select the Template**: A pop-up window will appear, listing all the `.md` files in your `templates` folder. From this list, select **YouTube**.
5. **Paste the URL**: Templater will now execute the script. It may prompt you for the URL you copied. Paste it in and press Enter.