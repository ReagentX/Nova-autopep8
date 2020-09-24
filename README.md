# Nova + autopep8

Provides a native method for invoking the autopep8 Python file formatter CLI tool. It will format the currently active file.

## Installation

`⌘⇧2` to open the extension panel. Search for `autopep8`

## Usage

`⌘⇧P` to open the extension panel, then start typing `Format Python file`

## Configuration

`⌘⇧2` to open the extension panel. In the sidebar, select `autopep8`.

### Executable path

This is the path to where the `autopep8` executable is installed. This path comes from the output of `which autopep8` and **must be fully qualified**.

* Note: ensure that this refers to the `autopep8` installed in your `venv` if you are using one.

### CLI Arguments

These are the arguments passed to `autopep8` before appending the current file to the end.

By default no arguments are set. If we add `--aggressive --aggressive` to this section, the command generated will look like:

```bash
/path/to/autopep8 --in-place --aggressive --aggressive /path/to/current/file
```

* Note: `--in-place` is always prepended to the generated `autopep8` command.
