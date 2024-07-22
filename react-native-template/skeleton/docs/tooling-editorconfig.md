# Tooling - EditorConfig

## What & Why

- <https://editorconfig.org/>
- <https://dilanlivera.dev/what-is-a-editorconfig-file-and-how-to-use-it>
- <https://www.freecodecamp.org/news/how-to-use-editorconfig-to-standardize-code-styles/>

## Add .editorconfig file

Add a new `.editorconfig` file at the project root, and add the following to the file:

```config
# https://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 100
trim_trailing_whitespace = true

[*.md]
max_line_length = 0
trim_trailing_whitespace = false
```

## Configure Editor Integrations

- [editorconfig](https://editorconfig.org/#pre-installed)
- [prettier](https://prettier.io/docs/en/editors.html)
