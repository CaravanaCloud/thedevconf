package thedevconf.cfp.rs;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Enumeration;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebFilter("/tokens")
public class TokenFilter extends HttpFilter {

    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        var buf = new StringBuilder();
        buf.append(req.getRequestURI());
        buf.append("\n<h1>Params</h1>");
        Enumeration<String> params = req.getParameterNames(); 
        while(params.hasMoreElements()){
             String paramName = params.nextElement();
             buf.append("\n - "+paramName+", = "+req.getParameter(paramName));
            buf.append("\n<br/>");
        }
        buf.append("\n<h1>Headers</h1>");
        Enumeration<String> headerNames = req.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            buf.append("\n- " + headerName + " = " + req.getHeader(headerName));
            buf.append("\n<br/>");
        }
        buf.append("\n<h1>Cookies</h1>");
        Cookie[] cookies = req.getCookies();
        if(cookies!=null) {
          for (Cookie cookie : cookies) {
            buf.append("\n- " + cookie.getName() + " = " + cookie.getValue());
            buf.append("\n<br/>");
          }
        }
        buf.append("\n<h1>Session</h1>");
        Enumeration<String> attributes = req.getSession().getAttributeNames();
        while (attributes.hasMoreElements()) {
            String attribute = (String) attributes.nextElement();
            buf.append(attribute+" : "+req.getSession().getAttribute(attribute));
            buf.append("\n<br/>");
        }
        buf.append("\n<br/>");
        buf.append("\n<h1>Body</h1>");
        buf.append(getBody(req));
        //res.setHeader("content-type", "text/html");
        //res.getWriter().println(buf.toString());
        buf.append("\n</br>");
        System.out.println(buf.toString());
        chain.doFilter(req, res);	
    }

    public static String getBody(HttpServletRequest request) throws IOException {

        String body = null;
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = null;

        try {
            InputStream inputStream = request.getInputStream();
            if (inputStream != null) {
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                char[] charBuffer = new char[128];
                int bytesRead = -1;
                while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                    stringBuilder.append(charBuffer, 0, bytesRead);
                }
            } else {
                stringBuilder.append("");
            }
        } catch (IOException ex) {
            throw ex;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException ex) {
                    throw ex;
                }
            }
        }

        body = stringBuilder.toString();
        return body;
    }
}
