<template>
    <div class="row">
        <div class="col-md-4">
            <ul class="list-group" v-sortable="options">
                <li class="list-group-item">Foo <i class="handle"></i></li>
                <li class="list-group-item disabled">Bar <i class="handle"></i></li>
                <li class="list-group-item">Baz <i class="handle"></i></li>
            </ul>
        </div>
        <div class="col-md-8">
<pre v-pre><code class="language-markup">&#x3C;template&#x3E;
&#x3C;ul class=&#x22;list-group&#x22; v-sortable=&#x22;options&#x22;&#x3E;
    &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Foo &#x3C;i class=&#x22;handle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/li&#x3E;
    &#x3C;li class=&#x22;list-group-item disabled&#x22;&#x3E;Bar &#x3C;i class=&#x22;handle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/li&#x3E;
    &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;Baz &#x3C;i class=&#x22;handle&#x22;&#x3E;&#x3C;/i&#x3E;&#x3C;/li&#x3E;
&#x3C;/ul&#x3E;
&#x3C;/template&#x3E;

&#x3C;script&#x3E;
export default {
    data() {
        return {
            options: {
                handle: &#x27;.handle&#x27;,
                filter: &#x27;.disabled&#x27;
            }
        }
    }
}
&#x3C;/script&#x3E;</code></pre>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: {
                    handle: '.handle',
                    filter: '.disabled'
                }
            }
        }
    }
</script>

<style scoped>
    pre {
        margin: 0;
    }
</style>