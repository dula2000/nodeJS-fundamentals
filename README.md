# nodeJS-fundamentals

Node.js is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser.

The following list contains some of the important core modules in Node.js:

Core Modules              	Description

http	             creates an HTTP server in Node.js.
assert	           set of assertion functions useful for testing.
fs	               used to handle file system.
path	             includes methods to deal with file paths.
process          	 provides information and control about the current Node.js process.
os	               provides information about the operating system.
querystring	       utility used for parsing and formatting URL query strings.
url	               module provides utilities for URL resolution and parsing.


*** every node application there has be atleast one module.. It called as main module.

**Node.js has two module systems: CommonJS modules and ECMAScript modules.***

=>By default, Node.js will treat the following as CommonJS modules:
=>Files with a .cjs extension;
=>Files with a .js extension when the nearest parent package.json file contains a top-level field "type" with a value of "commonjs".
=>Files with a .js extension when the nearest parent package.json file doesn't contain a top-level field "type". Package authors should include the "type" field, even in packages where all sources are CommonJS. Being explicit about the type of the package will make things easier for build tools and loaders to determine how the files in the package should be interpreted.
=>Files with an extension that is not .mjs, .cjs, .json, .node, or .js (when the nearest parent package.json file contains a top-level field "type" with a value of "module", those files will be recognized as CommonJS modules only if they are being included via require(), not when used as the command-line entry point of the program).
