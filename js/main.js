var page = {
  init: function() {
    page.input = $('#input');
    page.output = $('.output');
    page.hasHtml = $('#hasHtml');
    page.submit = $('#submit');

    page.input.on('click', function (e) {
      page.output[0].focus();
      page.input[0].select();
    });

    page.submit.on('click', function (e) {
      e.preventDefault();
      page.output.val(page.replace());

      page.output[0].focus();
      page.output[0].select();
    });
  },
  replace: function() {
    var input = page.input.val(), output = '';

    for(var i in page.ents) {
      if(page.hasHtml.attr('checked') === 'checked') {
        if(i !== '<' && i !== '>') {
          var regex = new RegExp(i, 'g');
          if(output === '') {
            output = input.replace(regex, page.ents[i]);
          } else {
            output = output.replace(regex, page.ents[i]);
          }
        }
      } else {
        var regex = new RegExp(i, 'g');
        if(output === '') {
          output = input.replace(regex, page.ents[i]);
        } else {
          output = output.replace(regex, page.ents[i]);
        }
      }
    }
    return output;
  },
  ents: {
    '¹': '&sup1;',
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '´': '&acute;',
    '¸': '&cedil;',
    'ˆ': '&circ;',
    '¯': '&macr;',
    '·': '&middot;',
    '~': '&tilde;',
    '¨': '&uml;',
    'Á': '&Aacute;',
    'á': '&aacute;',
    'Â': '&Acirc;',
    'â': '&acirc;',
    'Æ': '&AElig;',
    'æ': '&aelig;',
    'À': '&Agrave;',
    'à': '&agrave;',
    'Å': '&Aring;',
    'å': '&aring;',
    'Ã': '&Atilde;',
    'ã': '&atilde;',
    'Ä': '&Auml;',
    'ä': '&auml;',
    'Ç': '&Ccedil;',
    'ç': '&ccedil;',
    'É': '&Eacute;',
    'é': '&eacute;',
    'Ê': '&Ecirc;',
    'ê': '&ecirc;',
    'È': '&Egrave;',
    'è': '&egrave;',
    'Ð': '&ETH;',
    'ð': '&eth;',
    'Ë': '&Euml;',
    'ë': '&euml;',
    'Í': '&Iacute;',
    'í': '&iacute;',
    'Î': '&Icirc;',
    'î': '&icirc;',
    'Ì': '&Igrave;',
    'ì': '&igrave;',
    'Ï': '&Iuml;',
    'ï': '&iuml;',
    'Ñ': '&Ntilde;',
    'ñ': '&ntilde;',
    'Ó': '&Oacute;',
    'ó': '&oacute;',
    'Ô': '&Ocirc;',
    'ô': '&ocirc;',
    'Œ': '&OElig;',
    'œ': '&oelig;',
    'Ò': '&Ograve;',
    'ò': '&ograve;',
    'Ø': '&Oslash;',
    'ø': '&oslash;',
    'Õ': '&Otilde;',
    'õ': '&otilde;',
    'Ö': '&Ouml;',
    'ö': '&ouml;',
    'Š': '&Scaron;',
    'š': '&scaron;',
    'ß': '&szlig;',
    'Þ': '&THORN;',
    'þ': '&thorn;',
    'Ú': '&Uacute;',
    'ú': '&uacute;',
    'Û': '&Ucirc;',
    'û': '&ucirc;',
    'Ù': '&Ugrave;',
    'ù': '&ugrave;',
    'Ü': '&Uuml;',
    'ü': '&uuml;',
    'Ý': '&Yacute;',
    'ý': '&yacute;',
    'ÿ': '&yuml;',
    'Ÿ': '&Yuml;',
    '¢': '&cent;',
    '¤': '&curren;',
    '€': '&euro;',
    '£': '&pound;',
    '¥': '&yen;',
    '¦': '&brvbar;',
    '•': '&bull;',
    '©': '&copy;',
    '†': '&dagger;',
    '‡': '&Dagger;',
    '⁄': '&frasl;',
    '…': '&hellip;',
    '¡': '&iexcl;',
    'ℑ': '&image;',
    '¿': '&iquest;',
    '—': '&mdash;',
    '–': '&ndash;',
    '¬': '&not;',
    '‾': '&oline;',
    'ª': '&ordf;',
    'º': '&ordm;',
    '¶': '&para;',
    '‰': '&permil;',
    '′': '&prime;',
    '″': '&Prime;',
    'ℜ': '&real;',
    '®': '&reg;',
    '§': '&sect;',
    '™': '&trade;',
    '℘': '&weierp;',
    '„': '&bdquo;',
    '«': '&laquo;',
    '“': '&ldquo;',
    '‹': '&lsaquo;',
    '‘': '&lsquo;',
    '»': '&raquo;',
    '”': '&rdquo;',
    '›': '&rsaquo;',
    '’': '&rsquo;',
    '‚': '&sbquo;',
    '°': '&deg;',
    '÷': '&divide;',
    '½': '&frac12;',
    '¼': '&frac14;',
    '¾': '&frac34;',
    '≥': '&ge;',
    '≤': '&le;',
    '−': '&minus;',
    '²': '&sup2;',
    '³': '&sup3;',
    '×': '&times;',
    'ℵ': '&alefsym;',
    '∧': '&and;',
    '∠': '&ang;',
    '≈': '&asymp;',
    '∩': '&cap;',
    '≅': '&cong;',
    '∪': '&cup;',
    '∅': '&empty;',
    '≡': '&equiv;',
    '∃': '&exist;',
    'ƒ': '&fnof;',
    '∀': '&forall;',
    '∞': '&infin;',
    '∫': '&int;',
    '∈': '&isin;',
    '⟨': '&lang;',
    '⌈': '&lceil;',
    '⌊': '&lfloor;',
    '∗': '&lowast;',
    'µ': '&micro;',
    '∇': '&nabla;',
    '≠': '&ne;',
    '∋': '&ni;',
    '∉': '&notin;',
    '⊄': '&nsub;',
    '⊕': '&oplus;',
    '∨': '&or;',
    '⊗': '&otimes;',
    '∂': '&part;',
    '⊥': '&perp;',
    '±': '&plusmn;',
    '∏': '&prod;',
    '∝': '&prop;',
    '√': '&radic;',
    '⟩': '&rang;',
    '⌉': '&rceil;',
    '⌋': '&rfloor;',
    '⋅': '&sdot;',
    '∼': '&sim;',
    '⊂': '&sub;',
    '⊆': '&sube;',
    '∑': '&sum;',
    '⊃': '&sup;',
    '⊇': '&supe;',
    '∴': '&there4;',
    'Α': '&Alpha;',
    'α': '&alpha;',
    'Β': '&Beta;',
    'β': '&beta;',
    'Χ': '&Chi;',
    'χ': '&chi;',
    'Δ': '&Delta;',
    'δ': '&delta;',
    'Ε': '&Epsilon;',
    'ε': '&epsilon;',
    'Η': '&Eta;',
    'η': '&eta;',
    'Γ': '&Gamma;',
    'γ': '&gamma;',
    'Ι': '&Iota;',
    'ι': '&iota;',
    'Κ': '&Kappa;',
    'κ': '&kappa;',
    'Λ': '&Lambda;',
    'λ': '&lambda;',
    'Μ': '&Mu;',
    'μ': '&mu;',
    'Ν': '&Nu;',
    'ν': '&nu;',
    'Ω': '&Omega;',
    'ω': '&omega;',
    'Ο': '&Omicron;',
    'ο': '&omicron;',
    'Φ': '&Phi;',
    'φ': '&phi;',
    'Π': '&Pi;',
    'π': '&pi;',
    'ϖ': '&piv;',
    'Ψ': '&Psi;',
    'ψ': '&psi;',
    'Ρ': '&Rho;',
    'ρ': '&rho;',
    'Σ': '&Sigma;',
    'σ': '&sigma;',
    'ς': '&sigmaf;',
    'Τ': '&Tau;',
    'τ': '&tau;',
    'Θ': '&Theta;',
    'θ': '&theta;',
    'ϑ': '&thetasym;',
    'ϒ': '&upsih;',
    'Υ': '&Upsilon;',
    'υ': '&upsilon;',
    'Ξ': '&Xi;',
    'ξ': '&xi;',
    'Ζ': '&Zeta;',
    'ζ': '&zeta;',
    '↵': '&crarr;',
    '↓': '&darr;',
    '⇓': '&dArr;',
    '↔': '&harr;',
    '⇔': '&hArr;',
    '←': '&larr;',
    '⇐': '&lArr;',
    '→': '&rarr;',
    '⇒': '&rArr;',
    '↑': '&uarr;',
    '⇑': '&uArr;',
    '♣': '&clubs;',
    '♦': '&diams;',
    '♥': '&hearts;',
    '♠': '&spades;',
    '◊': '&loz;',
    '': '',
    ' ': ' '
  }
};

$(document).ready(function() {
  page.init();
});