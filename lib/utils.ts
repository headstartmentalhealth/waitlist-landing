import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const htmlContent = (name: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to HeadStart</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Gilroy:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style type="text/css">
        /* Gilroy font face with fallbacks */
        @font-face {
            font-family: 'DM Sans';
            src: url('https://fonts.gstatic.com/s/gilroy/v1/8vIQ7wQ3Q4hTo6v7C8F4.woff2') format('woff2');
            font-weight: 400;
            font-display: swap;
        }
        
        body {
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                        'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
            -webkit-font-smoothing: antialiased;
        }
        
        /* Outlook-specific fixes */
        .ExternalClass {
            width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            background-color: #4045e1;
            padding: 40px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        
        .header h1 {
            color: white;
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.5px;
            mso-line-height-rule: exactly;
            line-height: 1.2;
        }
        
        .content {
            background-color: white;
            padding: 20px;
            border-radius: 0 0 8px 8px;
        }
        
        .button {
            display: inline-block;
            background-color: #13274F;
            color: white !important;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 6px;
            font-weight: 600;
            margin: 25px 0;
            font-size: 16px;
            transition: all 0.2s ease;
            mso-padding-alt: 0;
        }
        
        /* Mobile responsiveness */
        @media screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                padding: 10px !important;
            }
            .content {
                padding: 10px !important;
            }
            .header {
                padding: 30px 15px !important;
            }
            .header h1 {
                font-size: 26px !important;
            }
            .button {
                display: block !important;
                width: 80% !important;
                margin: 20px auto !important;
                text-align: center !important;
            }
            .mb-5{
              margin-bottom: 5px;
            }
        }
    </style>
</head>
<body style="margin:0; padding:0;">
    <!-- Outlook wrapper -->
    <div style="background-color:#f7f7f7;">
        <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td>
        <![endif]-->
        
        <div class="container">
            
            <div class="content">
                <div>
                  <!-- Replace with your actual logo URL -->
                  <img src="https://res.cloudinary.com/dh7tf3d4x/image/upload/v1767290118/HeadStart_Logo_Full_M_ooqnvt.png" alt="HeadStart Connect" class="logo" width="180" style="max-width:180px; margin-bottom:25px;">
                  <h2 style="font-family:'DM Sans'; font-weight:700;">Welcome to HeadStart Connect!</h2>
                </div>

                <p style="margin:0 0 20px 0;">Hi ${name || 'there'},</p>
              
                <p style="margin:0 0 20px 0;">We're excited to have you as part of the HeadStart Connect community. You're now on our exclusive waitlist and will be among the first to experience our platform.</p>
                
                <div style="background-color:#f0f2ff; padding:20px; border-radius:6px; margin:20px 0; border-left:4px solid #13274F;">
                    <h2 style="font-family:'DM Sans'; color:#13274F; font-weight:600; font-size:22px; margin-top:0; margin-bottom:15px;">What's Next?</h2>
                    <ul style="padding-left:20px; margin:0;">
                        <li style="margin-bottom:10px;font-family:'DM Sans';"><strong>Early access</strong> to our platform before public launch</li>
                        <li style="margin-bottom:10px;font-family:'DM Sans';"><strong>Exclusive updates</strong> about our development progress</li>
                        <li style="margin-bottom:10px;font-family:'DM Sans';"><strong>Special offers</strong> reserved for waitlist members</li>
                    </ul>
                </div>
                
                <p style="margin:0 0 20px 0;">Our team is working hard to deliver an exceptional experience, and we can't wait to share it with you.</p>
                
                <div style="text-align:center;">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://headstartconnect.com" style="height:44px;v-text-anchor:middle;width:200px;" arcsize="10%" stroke="f" fillcolor="#13274F">
                        <w:anchorlock/>
                        <center style="color:#ffffff;font-family:'DM Sans';font-size:16px;font-weight:bold;">Explore HeadStart Connect</center>
                    </v:roundrect>
                    <![endif]-->
                    <a href="https://headstartconnect.com" class="button" style="font-family:'DM Sans';">Explore HeadStart Connect</a>
                </div>
                
                <div class="social-icons" style="margin:30px 0; text-align:center;">
                    <a href="https://x.com/headstartconnect" class="social-icon" style="margin:0 10px; display:inline-block; color:#13274F; text-decoration:none;">X</a>
                    <a href="https://linkedin.com/company/headstartconnect" class="social-icon" style="margin:0 10px; display:inline-block; color:#13274F; text-decoration:none;">LinkedIn</a>
                    <a href="https://instagram.com/headstartconnect" class="social-icon" style="margin:0 10px; display:inline-block; color:#13274F; text-decoration:none;">Instagram</a>
                    <a href="https://tiktok.com/@headstartconnect" class="social-icon" style="margin:0 10px; display:inline-block; color:#13274F; text-decoration:none;">Tiktok</a>
                </div>
                
                <div class="footer" style="text-align:center; margin-top:40px; color:#777777; font-size:14px;">
                    <p style="margin:0 0 5px 0;">Best regards,</p>
                    <p style="margin:0 0 20px 0; font-weight:600;">The HeadStart Team</p>
                    <p style="margin:20px 0 0 0;">
                        <a href="https://headstartconnect.com" style="color:#13274F; text-decoration:none;">headstartconnect.com</a> | 
                        <a href="mailto:headstartmentalhealth@gmail.com" style="color:#13274F; text-decoration:none;">headstartmentalhealth@gmail.com</a>
                    </p>
                    <p style="margin:15px 0 0 0; font-size:12px;">
                        © ${new Date().getFullYear()} HeadStart Connect. All rights reserved.<br>
                        <a href="https://headstartconnect.com/unsubscribe" style="color:#777; text-decoration:none;">Unsubscribe</a>
                    </p>
                </div>
            </div>
        </div>
        
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
    </div>
</body>
</html>
`;
