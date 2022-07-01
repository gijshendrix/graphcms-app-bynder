# GraphCMS Bynder Demo App

[Join our Slack](https://slack.graphcms.com)

This App integrates GraphCMS with Bynder. It leverages Bynder's Compact View v2 component to browse assets from Bynder and use these within GraphCMS content entries.

## How to use

Installation can be done through the install url. As part of the setup, you'll configure the following global parameters:

| Name          | Description  |
| --- | --- |
| Default Domain | Your Bynder portal url. Example: `https://<your-domain>.bynder.com/` |
| Default domain editable | Determines whether users be able to change the default domain when adding assets. |
| Available asset types | Determines which asset types your users will be able to select.  |

The available asset types can be overridden on specific fields. This has to be done in the field configuration dialog, using a string of the following format: `["image", "audio", "video", "document"]`. Make sure to remove the types you don't want to allow.

## Resources

* [GraphCMS Marketplace](https://graphcms.com/marketplace)
* [Compact View on the Bynder Knowledge Base](https://help.bynder.com/system/compact-view.htm)
* [Compact View in the Bynder Developer Documentation](https://developer-docs.bynder.com/UI%20components/)
* [Bynder OAuth2 documentation](https://developer-docs.bynder.com/authentication-oauth2-oauth-apps)