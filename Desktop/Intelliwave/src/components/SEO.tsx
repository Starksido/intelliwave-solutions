import { useEffect } from 'react';

type SEOProps = {
	title: string;
	description?: string;
	ldJson?: Record<string, unknown> | Record<string, unknown>[];
};

export default function SEO({ title, description, ldJson }: SEOProps) {
	useEffect(() => {
		document.title = title;
		if (description) setMeta('description', description);

		if (ldJson) {
			const scriptId = 'ld-json-seo';
			let script = document.getElementById(scriptId) as HTMLScriptElement | null;
			if (!script) {
				script = document.createElement('script');
				script.type = 'application/ld+json';
				script.id = scriptId;
				document.head.appendChild(script);
			}
			script.text = JSON.stringify(ldJson);
		}
	}, [title, description, ldJson]);

	return null;
}

function setMeta(name: string, content: string) {
	let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
	if (!tag) {
		tag = document.createElement('meta');
		tag.name = name;
		document.head.appendChild(tag);
	}
	tag.content = content;
}


