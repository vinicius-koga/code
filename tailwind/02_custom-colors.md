É possível criar cores personalizadas no Tailwind:
# --color-[colorName]: [color];

# Primeiro no index.css:
@themes {
	--color-custom: #123456
}

# No HTML:
<div className="text-custom bg-custom"></div>
